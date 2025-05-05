import { IInitialState, IPayload } from "../types/addProduct/AddProduct.ts";


export const CommonFunction = (payload: IPayload, state: IInitialState) => {
    if (payload.errors.product_name){
        state.errState.product_name = payload.errors.product_name
    }else {
        state.errState.product_name = ""
    }
    if (payload.errors.price){
        state.errState.price = payload.errors.price
    }else {
        state.errState.price = ""
    }
    if (payload.errors.quantity){
        state.errState.quantity = payload.errors.quantity
    }else {
        state.errState.quantity = ""
    }
    if (payload.errors.brand){
        state.errState.brand = payload.errors.brand
    }else {
        state.errState.brand = ""
    }
    if (payload.errors.color){
        state.errState.color = payload.errors.color
    }else {
        state.errState.color = ""
    }
    if (payload.errors.screen_size){
        state.errState.screen_size = payload.errors.screen_size
    }else {
        state.errState.screen_size = ""
    }
    if (payload.errors.battery){
        state.errState.battery = payload.errors.battery
    }else {
        state.errState.battery = ""
    }
    if (payload.errors.image){
        state.errState.image = payload.errors.image
    }else {
        state.errState.image = ""
    }
    if (payload.errors.description){
        state.errState.description = payload.errors.description
    }else {
        state.errState.description = ""
    }
    if (payload.errors.graphics){
        state.errState.graphics = payload.errors.graphics
    }else {
        state.errState.graphics = ""
    }
    if (payload.errors.ram){
        state.errState.ram = payload.errors.ram
    }else {
        state.errState.ram = ""
    }
    if (payload.errors.processor){
        state.errState.processor = payload.errors.processor
    }else {
        state.errState.processor = ""
    }
    if (payload.errors.storage){
        state.errState.storage = payload.errors.storage
    }else {
        state.errState.storage = ""
    }
    if (payload.errors.storage){
        state.errState.storage = payload.errors.storage
    }else {
        state.errState.storage = ""
    }
    if (payload.errors.storage_type){
        state.errState.storage_type = payload.errors.storage_type
    }else {
        state.errState.storage_type = ""
    }
    if (payload.errors.display){
        state.errState.display = payload.errors.display
    }else {
        state.errState.display = ""
    }
    if (payload.errors.operating_system){
        state.errState.operating_system = payload.errors.operating_system
    }else {
        state.errState.operating_system = ""
    }
};
