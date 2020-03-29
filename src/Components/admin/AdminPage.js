import React from "react";
import CreateInvestmentContent from "./investment/CreateInvestmentContent";
import {Container} from "react-bootstrap";
import {PRIMARY_COLOR} from "../../utils/Const";
import InvestmentList from "../shared/InvestmentList";
import TodoList from "../shared/TodoList";
import CreateTodoContent from "./todo/CreateTodoContent";
import AdminSection from "./AdminSection";

export default class AdminPage extends React.Component {
    render() {
        return (
            <Container>
                <AdminSection sectionTitle={"Investments"}
                              list={<InvestmentList/>}
                              buttonName={"Create new investment"}
                              buttonBody={<CreateInvestmentContent/>}
                              givenStyle={TopContainerStyle}
                />
                <AdminSection sectionTitle="Activities"
                              list={<TodoList/>}
                              buttonName={"Create new todo"}
                              buttonBody={<CreateTodoContent/>}/>
            </Container>
        )
    }
}

const TopContainerStyle = {paddingTop: "10px", border: "solid", borderColor: PRIMARY_COLOR};