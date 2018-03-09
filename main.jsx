class MarkupArea extends React.Component {
  constructor() {
    super()
    this.state = {textValue:'Heading\n=======\n \n# Another heading\n \nSub-heading\n-----------\n\
      \n## Another sub-heading\n \n### A smaller heading\n \nParagraphs are separated by a blank line.\n\
      \nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes: *italic*, **bold**,\
      `monospace`, ~~strikethrough~~ .\n\n Unordered list (use asterisks):\n\n  * butter\n  * sugar\n  * flour\n\
      \nOrdered list (use numbers):\n\n  1. Pre-heat over\n  2. Mix ingredients\n  3. Bake for 20 minutes\n\
      \nFor links use brackets and parentheses []()  \
      \n[Github Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)' }
    this.setText = this.setText.bind(this);
    this.output= this.output.bind(this);
  }
  
  setText(payload) {
    this.setState({textValue: payload.target.value});
  }
  
  output() {
   return {__html: marked(this.state.textValue)};
  } 
    
  render() {
    return (
      <div id = 'markupSection'>
        <div id= 'markup'>
          <h1 className ='headings'>Markup:</h1>
          <textarea value = {this.state.textValue} onChange = {this.setText} >
          </textarea>
        </div>
        <div id = 'output'>
          <h1 className='headings'>Output:</h1>
          <span dangerouslySetInnerHTML = {this.output()}></span>
        </div>
      </div>
    );
  }
}


const Footer = () => (
    <footer>
    <p><a href = 'https://github.com/ChrisCurl/Markdown-Previewer'>Chris Curl March 2018</a></p>
    </footer>
);

const App = () => (
  <div id = 'app'>
    <MarkupArea />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

