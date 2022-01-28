class Application extends React.Component {
    render() {
        $(document).mousemove(function (e) {
            $('.cursor').eq(0).css({
                left: e.clientX,
                top: e.clientY
            });
            setTimeout(function () {
                $('.cursor').eq(1).css({
                    left: e.clientX,
                    top: e.clientY
                });
            }, 100);
        });

        function activeCursor() {
            $('.cursor').eq(1).css({
                width: '72px',
                height: '72px'
            });
        }

        function inactiveCursor() {
            $('.cursor').eq(1).css({
                width: '22px',
                height: '22px'
            });
        }


        return <div className="bg">
            <div className="cursor"></div>
            <div className="cursor"></div>
            <div className="color" onMouseOut={() => inactiveCursor()} onMouseOver={() => activeCursor()} onClick={() => inactiveCursor()}>Hello, ES6 and React!</div>
            <div className="color2" onMouseOut={() => inactiveCursor()} onMouseOver={() => activeCursor()} onClick={() => inactiveCursor()}>custom cursor by <a href="http://www.cristigoia.com" target="_blank">cg</a></div>

        </div>;
    }
}


React.render(<Application />, document.getElementById('root'));