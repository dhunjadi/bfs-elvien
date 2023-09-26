type StatusBarProps = {
    text: string;
};

const getStatus = (status: string): string => {
    if (status === 'applied') return 'c-statusBar--applied';
    if (status === 'declined') return 'c-statusBar--declined';
    if (status === 'canceled') return 'c-statusBar--canceled';
    return 'c-statusBar--awaitingResponse';
};

const StatusBar = ({text}: StatusBarProps) => {
    return <div className={`c-statusBar ${getStatus(text)}`}>{text}</div>;
};

export default StatusBar;
