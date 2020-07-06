import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

// Import css files Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './blog.module.css';

function SectionBlog(props) {
    let settings = {
      arrows: false,
      infinite: false,
      autoplay: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const {blog} = props;

    return (
        <div className={styles.blog}>
          <div className={styles.blogHeading}>
            <span className={styles.spanBlog}>Blog Covid-19</span>
            <h2 className={styles.titleBlog}>Latest News Coronavirus</h2>
          </div>
            <Container>
              <Slider {...settings}>
                {blog.map(blog => (
                  <Col key={blog.id}>
                    <div className={styles.cardsBlog}>
                      <Card className={styles.card}>
                        <Card.Img className={styles.imgCard} variant="top" src={process.env.PUBLIC_URL + blog.image} />
                        <Card.Body className={styles.bodycard}>
                          <div className={styles.postDate}>
                            <p>
                              <i className="fa fa-clock-o" style={{ color: '#50658e' }}></i>
                              {blog.dateBlog}
                            </p>
                          </div>
                          <Link className={styles.categ} to='/blog'>{blog.categ}</Link>
                          <Card.Title className={styles.titleCard}>{blog.title} </Card.Title>
                          <Card.Text className={styles.descCard}>
                            {blog.description}
                          </Card.Text>
                          <Link className={styles.btnBlog} to='/blog'>
                            Read More <i className='fa fa-angle-double-right'></i>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Slider>  
            </Container> 
        </div>
    )
}

export default SectionBlog;