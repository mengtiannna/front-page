import React, { Component } from "react";
import "./index.less"; // 引入CSS样式

class Waterfall extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      items: [
        { id: 1, content: "内容1" },
        { id: 2, content: "内容2" },
        { id: 3, content: "内容3" },
        { id: 4, content: "内容4" },
        { id: 5, content: "内容5" },
        { id: 6, content: "内容6" },
        { id: 7, content: "内容7" },
        { id: 8, content: "内容8" },
        { id: 9, content: "内容9" },
        { id: 10, content: "内容10" },
        // 初始加载的项目
      ],
      loading: false, // 加载状态
    };
  }

  componentDidMount() {
    this.layoutItems();
    window.addEventListener("resize", this.layoutItems); // 响应式布局
    window.addEventListener("scroll", this.handleScroll); // 滚动监听
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.layoutItems);
    window.removeEventListener("scroll", this.handleScroll);
  }

  // 计算布局位置
  layoutItems = () => {
    const container = this.containerRef.current;
    const items = container.getElementsByClassName("item");
    const columnCount = 2; // 列数
    const columns = []; // 存储每一列的高度
    const columnWidth = items[0].offsetWidth + 20; // 项目宽度加上外边距

    // 初始化列的高度
    for (let i = 0; i < columnCount; i++) {
      columns[i] = 0;
    }

    // 计算每个元素的最佳位置
    Array.from(items).forEach((item) => {
      const minColumnHeight = Math.min(...columns);
      const columnIndex = columns.indexOf(minColumnHeight);

      const left = columnIndex * columnWidth; // 横坐标
      const top = columns[columnIndex]; // 纵坐标

      item.style.position = "absolute";
      item.style.left = left + "px";
      item.style.top = top + "px";

      // 更新列的高度
      columns[columnIndex] += item.offsetHeight + 10; // 增加当前项目的高度和间隙
    });

    // 让容器的高度适应所有元素
    container.style.position = "relative";
    container.style.height = Math.max(...columns) + "px"; // 设置容器的总高度
  };

  // 滚动事件处理
  handleScroll = () => {
    const container = this.containerRef.current;
    if (!container) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 50 && !this.state.loading) {
      this.loadMoreItems();
    }
  };

  // 加载更多的项目
  loadMoreItems = () => {
    this.setState({ loading: true }, () => {
      // 模拟异步加载
      setTimeout(() => {
        const newItems = Array.from({ length: 10 }, (_, index) => ({
          id: this.state.items.length + index + 1,
          content: `内容 ${this.state.items.length + index + 1}`,
        }));

        this.setState(
          (prevState) => ({
            items: [...prevState.items, ...newItems],
            loading: false,
          }),
          this.layoutItems, // 更新布局
        );
      }, 1000); // 模拟加载延迟
    });
  };

  render() {
    return (
      <div ref={this.containerRef} className="waterfall-container">
        {this.state.items.map((item, index) => (
          <div key={item.id} className="item">
            <p>
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
            </p>
            <p>
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
            </p>
            <p>
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
              {index % 2 === 0 ? item.content : ""}
            </p>
            <img
              src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(index % 33) + 1}.jpg`}
              alt="egjs"
              width="300"
              data-grid-maintained-target="true"
            />
          </div>
        ))}
        {this.state.loading && <div className="loading">加载中...</div>}
      </div>
    );
  }
}

export default Waterfall;
