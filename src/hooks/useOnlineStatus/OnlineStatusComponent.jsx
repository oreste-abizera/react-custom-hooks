import useOnlineStatus from "./useOnlineStatus";

export default function App() {
  const online = useOnlineStatus();

  return (
    <div>
      <h1>You are {online ? "Online" : "Offline"}</h1>
    </div>
  );
}
