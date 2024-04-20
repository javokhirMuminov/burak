import { ExtendedRequest } from "../libs/types/member";
import { T  } from "../libs/types/common";
import { Response } from "express";
import Errors, { HttpmCode } from "../libs/Errors";
import OrderService from "../modules/Order.service";
import { OrderInquiry } from "../libs/types/order";
import { orderStatus } from "../libs/enums/order.enum";


const orderService = new OrderService
const orderController: T = {};

orderController.createOrder = async (req:ExtendedRequest, res: Response) => {
  try {
    console.log("createOrder");
    const result = await orderService.createOrder(req.member, req.body)


    res.status(HttpmCode.CREAT).json({result})
  } catch (err) {
    console.log("Error, createOrder:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);

  }
}



orderController.createOrders = async (req:ExtendedRequest, res: Response) => {
  try {
    console.log("createOrder");

    const { page, limit, orderStatus} = req.query;
    const inquiry: OrderInquiry = {
      page: Number(page),
      limit: Number(limit),
      orderStatus: orderStatus as orderStatus,
    };

    const result = await orderService.getMyOrders(req.member, inquiry);



    res.status(HttpmCode.CREAT).json({result})
  } catch (err) {
    console.log("Error, createOrders:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);

  }
}


export default orderController;