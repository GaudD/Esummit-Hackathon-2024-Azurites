"use client"

// Then, in your component where you want to display the fetched data
import React, { useEffect, useState } from 'react';
import Card from "@/components/card";

export default async function Charts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/hello");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    );
};
