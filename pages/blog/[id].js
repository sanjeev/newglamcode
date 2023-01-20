import GlobalError from "next/dist/client/components/error-boundary";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoadingScreen from "../../components/LoadingScreen/loadingScreen";
import Global from "../../_helpers/global";
import { frontService } from "../../_services/front.services";

export default function Blog() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true)
    const [blogsLoading, setBlogsLoading] = useState(true)
    const [items, setItems] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        frontService.blogs()
            .then(
                res => {
                    if (res.status === 'success') {
                        setItems(res.blogs);
                        setBlogsLoading(false)
                    } else {
                        console.log('Something went wrong !!');
                        setBlogsLoading(false)
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    setBlogsLoading(false)
                }
            )
    }, []);

    useEffect(() => {
        getDetails()
    }, [id]);

    const getDetails = () => {
        setLoading(true)
        frontService.blogDetails(id)
            .then(
                res => {
                    if (res.status === 'success') {
                        setItem(res.blogs[0]);
                        setLoading(false)
                    } else {
                        console.log('Something went wrong !!');
                        setLoading(false)
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    setLoading(false)
                }
            )
    }

    return (<section id="blogs">
        <Container fluid>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <img src="/blog.png" className="banner-img" />
                </div>
                {item && <div className="col-lg-5 social">
                    <div className="">
                        <ul>
                            <li>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${Global.BASE_APP_PATH}/blog/${item.post_title}`} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24   " viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#akarIconsFacebookFill0)"><path fill="#000" fillRule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z" clipRule="evenodd" /></g><defs><clipPath id="akarIconsFacebookFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                                </a></li>
                            <li>
                                <a href={`https://twitter.com/intent/tweet?text=${Global.BASE_APP_PATH}/blog/${item.post_title}&title=${item.post_title}`} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" /></svg>
                                </a>
                            </li>

                            <li>
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${Global.BASE_APP_PATH}&title=${item.post_title}&source=${Global.BASE_APP_PATH + item.category_image}`} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href={`https://www.pinterest.com/pin/create/button?url=${Global.BASE_APP_PATH}&media=${Global.BASE_APP_PATH + item.category_image}&title=${item.post_title}`} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 16 16"> <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" ></path> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>}
            </div>
            {(loading || blogsLoading) ? <LoadingScreen /> : (<div className="row">
                <div className="col-lg-8 blog-container">
                    {item ? <div className="row blogs">
                        <div className="col-12">
                            <div href={"/blog/" + item.ID} className="blog-item w-100" key={item.ID}>
                                <div className="img-width">
                                    <img src={item.image_url} />
                                </div>
                                <p className="small mb-0">{item.category_name}</p>
                                <p className="post-title">{item.post_title}</p>

                                <div className="small">{item.post_tags}</div>
                                {item && item.post_content && <div dangerouslySetInnerHTML={{ __html: JSON.stringify((item.post_content).replaceAll("\r\n", "")) }} />}
                            </div>
                        </div>
                    </div>
                        : <div className="row blogs">No Data </div>}
                </div>
                <div className="col-lg-4 recent-posts-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                                Recent Post
                            </div>
                        </div>
                        <div className="col-lg-12 recent-posts">
                            {items.map((e) => {
                                return <Link key={e.ID} className="d-flex recent-post" href={"/blog/" + e.ID}>
                                    <div className="img-box"><img src={e.image_url} /></div>
                                    <div className="post-title">{e.post_title}</div>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            )}
        </Container>
    </section>
    )
}