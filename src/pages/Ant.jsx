import { Layout, Menu, Breadcrumb, Icon, Table } from "antd";
import React, { Component } from "react";
import "antd/dist/antd.css";
import Nav from '../components/Nav'
import Title from '../components/Title'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends Component {
  state = {
    collapsed: false,
    dataSource: [
        { key: "1", name: "胡彦斌", age: 32, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" },
        { key: "2", name: "胡彦祖", age: 42, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" },
        { key: "3", name: "胡彦斌", age: 32, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" },
        { key: "4", name: "胡彦祖", age: 42, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" },
        { key: "5", name: "胡彦斌", age: 32, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" },
        { key: "6", name: "胡彦祖", age: 42, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" },
        { key: "7", name: "胡彦斌", age: 32, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" },
        { key: "8", name: "胡彦祖", age: 42, address: "西湖区湖底公园1号", phone: "18626672558", sex: "男", email: "mluckydog@126.com" }
    ],
    columns: [
        { title: "姓名", dataIndex: "name", key: "name" },
        { title: "年龄", dataIndex: "age", key: "age" },
        { title: "住址", dataIndex: "address", key: "address" },
        { title: "电话", dataIndex: "phone", key: "phone" },
        { title: "性别", dataIndex: "sex", key: "sex" },
        { title: "邮箱", dataIndex: "email", key: "email" }
    ],
    navList:[
      { key: "1", name: "首页", age: 32},
      { key: "2", name: "商品", age: 42},
      { key: "3", name: "促销", age: 32},
      { key: "4", name: "专区", age: 42},
    ]
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentWillMount(){
        const { columns } = this.state
        columns.map((item,index) => {
            if(columns.length-1 !== index){
                item.width = 200
            }
            if(columns.length>1 && index === 0 ){
                item.fixed = "left"
                item.width = 100
            }
        })
        this.setState({
            columns
        })
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} >
              <Nav navList={this.state.navList}></Nav>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Title>
                <div className="title">人员统计</div>
                <div className="subTitle">近一年</div>
              </Title>
              <Table columns={this.state.columns} 
                    dataSource={this.state.dataSource}
                    scroll={{ x: "120%", y: 300}}
                    bordered
                    />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
