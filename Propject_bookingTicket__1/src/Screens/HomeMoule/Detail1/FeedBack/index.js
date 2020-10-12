import React, { createElement, useState } from 'react';
import '../../../../Layouts/FeedBack.scss';
import ReactStars from "react-rating-stars-component";
import 'antd/dist/antd.css';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';


export default function FeedBack() {

  const customStar = {
    size: 30,
    count: 5,
    isHalf: false,
    isHalf: true,
    value: 5,
    color: "wheat",
    a11y: true,
    activeColor: "orange",
    emptyIcon: <i className="fa fa-star" />,
    halfIcon: <i className="fa fa-star-half"></i>,
    fullIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
    }
  }


  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    // <span key="comment-basic-reply-to">Reply to</span>,
  ];



  return (
    <section section className="FeedBack" >
      <div className="content ">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div>Bạn nghĩ gì về phim này ?</div>
              </div>
              <div className="col-4 text-right">
                <div id="rating" className="rating">
                  <ReactStars {...customStar} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment_Content">
          <div className="card text-left">
            <div className="card-body">
              <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.</p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />
            </div>
          </div>



        </div>
      </div>
    </section >
  )
}
