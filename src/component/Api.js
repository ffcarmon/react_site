import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from "../Dashboard";
import { Col, Input, Row } from "antd";
import './Api.css';

function Api() {
    const [meals, setMeals] = useState([]);
    const [duplicatedMeals, setDuplicatedMeals] = useState([]);

    useEffect(() => {
        console.log('Component mounted, starting API call...');

        // Fetch data from the API using axios
        axios.get("https://themealdb.com/api/json/v1/1/filter.php?a=Canadian")
            .then(response => {
                setMeals(response.data.meals);
                setDuplicatedMeals(response.data.meals)
                console.log('API Response:', response.data); // Logging the response data
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Logging any errors
            });
    }, []);

    function searchItems(value) {
        const filteredMeals = duplicatedMeals.filter(meal =>
            meal.strMeal.toLowerCase().includes(value.toLowerCase())
        );
        setMeals(filteredMeals);
    }

    return (
        <Dashboard>
            <div>
                <Input
                    style={{ width: '30%', marginLeft: 50 }}
                    placeholder="Search meals..."
                    onChange={(e) => { searchItems(e.target.value) }}
                />
                <Row gutter={16} justify="center" className='mt-5'>
                    {meals.map((meal) => (
                        <Col lg={5} sm={24} className='text-center m-3'>
                            <div className="meal-card">
                                <p className="meal-title">{meal.strMeal}</p>
                                <img src={meal.strMealThumb} alt={meal.strMeal} height="200" />
                                <p className="meal-id">Id: {meal.idMeal}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Dashboard>
    );
}

export default Api;
