import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                // <div className='min-h-screen flex flex-col items-center text-red-600 gap-4 mt-16'>
                //     <h2>Ooops!Something went wrong....</h2>
                //     <button
                //         className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                //         onClick={() => alert(this.state.error?.message)}
                //     >Click here to see error</button>
                // </div>
                window.location.reload()
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
