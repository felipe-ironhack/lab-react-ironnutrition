import { CloseCircleOutlined } from "@ant-design/icons";

const NoItems = () => {
    return (
        <div className="no-items">
            <h1>Oops! You have no food entries</h1>
            <CloseCircleOutlined className="no-items-icon" />
        </div>
    );
};

export default NoItems