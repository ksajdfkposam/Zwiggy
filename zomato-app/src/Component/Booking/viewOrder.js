import axios from "axios"
import Header from "../../Header"
import Footer from "../../Footer"
import { DisplayOrder } from "./DisplayOrder"
import { useState, useEffect } from "react"

const url = "http://localhost:8900/orders"

export const ViewOrder = () => {
    const [orders, setOrders] = useState()

    let sessionData = sessionStorage.getItem("userData")
    console.log(sessionData)
    let data = JSON.parse(sessionData)
    console.log(data,"email")

    useEffect(() => {
        axios.get(`${url}?email=${data.email}`)
            .then((res) => setOrders(res.data))
    }, [])



    return (
        <>
            <Header />
            <DisplayOrder orderData={orders} />
            <Footer/>
        </>
    )
}