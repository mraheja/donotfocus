import { NotConnectionsGame } from "@/components/NotConnectionsGame/NotConnectionsGame";

const NotConnections = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
           <div>Definitely Connections</div>
           <NotConnectionsGame />
        </div>
    );
}

export default NotConnections;