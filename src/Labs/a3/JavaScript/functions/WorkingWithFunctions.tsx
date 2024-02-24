import Func1 from "./ES5Functions";
import Func2 from "./ArrowFunctions";
import Func3 from "./FunctionParenthesisAndParameters";
import Func4 from "./ImpliedReturn";
function Functions() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <Func1/>
          <Func2/>
          <Func3/>
          <Func4/>
       </div>
    );
}
export default Functions