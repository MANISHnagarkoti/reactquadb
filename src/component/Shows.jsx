import React from "react";
import useFetch from "../api/useFetch";
import axios from "axios";
import { styled } from "styled-components";
import Score from "./Score";
import { Link } from "react-router-dom";

const Shows = () => {
    const { data, laoding } = useFetch("/search/shows?q=all");


    return (
        <Container>
            {data && data?.map(({ show }) => {
                return (
                    <Link key={show.id} to={`/detail/${show.id}`}>
                        <Card>
                            <div className="img-wrapper">
                              {show?.image?.original ?  <img src={show?.image?.original} alt="" /> : <img src="https://www.hospitto.com/media/nopicture.gif" alt="" /> }  
                                
                            </div>

                            <div className="more-info">
                                <h1 >{show.name}</h1>

                                <div style={{ color: "gray", marginTop: "10px" }}>{show.genres.join(" , ")}</div>
                            </div>
                        </Card>
                    </Link>
                );
            })}
        </Container>
    );
};

export default Shows;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  height: auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`

  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 140px;
    height: 270px;
  }

  h1 {
    color: #ffffff;
    font-size: 16px;
    font-weight:bold;
  }

  .img-wrapper {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-radius: 30px 30px 0px 0px ;
    box-shadow: rgba(22, 19, 19, 0.623) 0px 3px 8px;

    @media (max-width: 500px) {
      height: 230px;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: 0.4s;
  }

  &:hover {
    transform: scale(1.04);
  }

  .more-info{
width: 100%;
height: 100px;
    overflow: hidden;
position: relative;
    z-index: 99;
padding: 10px;
padding-top: 20px;
  }

`;
