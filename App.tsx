import { PropsWithChildren } from 'react';

function App({ children }: PropsWithChildren) {

    return <div className="App">{children}</div>;
}

App.displayName = 'App';
export default App;
