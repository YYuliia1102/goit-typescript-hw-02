/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface T {
  title: string
}
class Component {

  constructor(public props: T) {
    this.props = props;
  }
}
class Page extends Component {

  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: 'Home Page' });

export { };