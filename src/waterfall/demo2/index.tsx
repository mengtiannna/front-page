import * as React from "react";
import { JustifiedInfiniteGrid } from "@egjs/react-infinitegrid";

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

class Item extends React.Component<{ num: number }> {
  render() {
    const { num } = this.props;
    return (
      <div
        className="item"
        style={{
          width: 300,
        }}
      >
        <div className="thumbnail">
          <img
            src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`}
            alt="egjs"
            width="300"
            data-grid-maintained-target="true"
          />
        </div>
        <div className="info">{`egjs ${num}`}</div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      items: getItems(0, 10),
    };
  }

  handleRequestAppend = (e: any) => {
    const nextGroupKey = (+e.groupKey! || 0) + 1;
    this.setState((prevState: any) => ({
      items: [...prevState.items, ...getItems(nextGroupKey, 10)],
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <JustifiedInfiniteGrid
        className="container"
        gap={5}
        onRequestAppend={this.handleRequestAppend}
      >
        {items.map((item) => (
          <Item
            data-grid-groupkey={item.groupKey}
            key={item.key}
            num={item.key}
          />
        ))}
      </JustifiedInfiniteGrid>
    );
  }
}

export default App;
