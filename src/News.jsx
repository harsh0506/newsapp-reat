import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const App = ({ img, title, description, url }) => (
        <Card
            style={{
                width: 300,
            }}
            cover={
                <img
                    alt="example"
                    src={img}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <a href={url}>
                <Meta
                    title={title}
                    description={description}
                />
            </a>
        </Card>
);
export default App;