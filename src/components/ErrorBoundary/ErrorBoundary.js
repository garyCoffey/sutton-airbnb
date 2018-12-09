import React from 'react';
import App from '../../App';
import Page500 from '../../pages/Page500'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
      info: ''
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
      error: error,
      info: info
    });

  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>{`You have error: ${this.state.error} with additional info of ${this.state.info}...That's all we know`}</h1>
          <Page500 />
        </div>
      );
    }
    return <App />;
  }
}

export default ErrorBoundary