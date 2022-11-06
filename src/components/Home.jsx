import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./Nav";

function Home() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setUser(data.results[userIndex]);
        setLoading(false);
        console.log(users.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePrev = (e) => {
    e.preventDefault();
    if (userIndex > 0) {
      setUserIndex((prev) => prev - 1);
      setUser(users[userIndex]);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (userIndex < users.length - 1) {
      setUserIndex((prev) => prev + 1);
      setUser(users[userIndex]);
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="container-wrapper">
        <section>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="news-item">
              <div className="profile-card">
                <div className="wrapper">
                  <div className="card" key={user.login?.uuid}>
                    <div className="image">
                      <img src={user.picture.medium} alt="" />
                    </div>
                    <div className="content">
                      <h2 className="name">
                        {user.name?.first} {user.name?.last}
                      </h2>
                      <p className="email"> {user.email} </p>
                      <p className="location">{user.location?.country}</p>
                      <p className="phone">{user.phone}</p>
                    </div>
                  </div>
                  <div className="paginate">
                    <button className="btn" onClick={handlePrev}>
                      Prev
                    </button>
                    <button className="btn" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;
