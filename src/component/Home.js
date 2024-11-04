import React from 'react';
import Dashboard from '../Dashboard';
import './Home.css';
import { Row, Col } from 'antd';

const Home = () => {
  return (
      <Dashboard>
        <div className="home-content">
          <h1 className="home-header">Welcome to My Portfolio</h1>

          {/* Image and Introductory Text Side by Side */}
          <Row gutter={[16, 16]} justify="center" align="middle" style={{ marginBottom: '20px' }}>
            {/* Image Column */}
            <Col xs={24} md={10} style={{ textAlign: 'center' }}>
              <img
                  src="/images/software-developer.webp"
                  alt="Software developer illustration"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </Col>

            {/* Introductory Text Column */}
            <Col xs={24} md={14}>
              <div className="gutter-box">Hello! I am a software developer with a passion for creating efficient and scalable applications.</div>
              <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                <Col span={12}>
                  <div className="gutter-box">Full-Stack Development</div>
                </Col>
                <Col span={12}>
                  <div className="gutter-box">Experience in Java, Spring Boot, Angular, React, and more.</div>
                </Col>
                <Col span={12}>
                  <div className="gutter-box">Backend Expertise</div>
                </Col>
                <Col span={12}>
                  <div className="gutter-box">Frontend and UX Design</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Dashboard>
  );
};

export default Home;
