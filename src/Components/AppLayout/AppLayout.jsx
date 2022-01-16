import { Outlet }                   from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { HardDrive }                from "react-feather";
import {
	LaptopOutlined,
	NotificationOutlined,
} from "@ant-design/icons";

// Import Own Components
import "./AppLayout.scss";

const AppLayout = () => (
	<div id="AppLayout">
		<Layout>
			<Layout.Header className="header">
				<div className="logo" />
			</Layout.Header>
			<Layout>
				<Layout.Sider width={200} className="site-layout-background">
					<Menu
						mode="inline"
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						style={{ height : "100%", borderRight : 0 }}
					>
						<Menu.SubMenu key="sub1" icon={<LaptopOutlined />} title="Servers">
							<Menu.Item key="1">Logger</Menu.Item>
							<Menu.Item key="2">Faker</Menu.Item>
							<Menu.Item key="3">option3</Menu.Item>
							<Menu.Item key="4">option4</Menu.Item>
						</Menu.SubMenu>
						<Menu.SubMenu key="sub2" icon={<HardDrive size={16} />} title="Databases">
							<Menu.Item key="5">option5</Menu.Item>
							<Menu.Item key="6">option6</Menu.Item>
							<Menu.Item key="7">option7</Menu.Item>
							<Menu.Item key="8">option8</Menu.Item>
						</Menu.SubMenu>
						<Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
							<Menu.Item key="9">option9</Menu.Item>
							<Menu.Item key="10">option10</Menu.Item>
							<Menu.Item key="11">option11</Menu.Item>
							<Menu.Item key="12">option12</Menu.Item>
						</Menu.SubMenu>
					</Menu>
				</Layout.Sider>
				<Layout style={{ padding : "0 24px 24px" }}>
					<Breadcrumb style={{ margin : "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Layout.Content
						className="site-layout-background"
						style={{
							padding   : 24,
							margin    : 0,
							minHeight : 280,
						}}
					>
						<Outlet />
					</Layout.Content>
				</Layout>
			</Layout>
		</Layout>
	</div>
);

export default AppLayout;
