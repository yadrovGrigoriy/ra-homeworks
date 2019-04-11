class ProgressBar extends React.Component {
    constructor(props){
        super(props);
        this.innerCircle = {
          color:'#96d6f4',
          radius:45,
        }
        this.outerCirle = {
          color:'#4ca89a',
          radius:52,
        } 
        this.canvas = null 
        
    }
    
    componentDidMount(){
      this.draw({ ...this.props })
    }

    componentDidUpdate(){
      this.draw({ ...this.props })
    }
    
    draw = ({completed, total}) => {
      this.canvas.width = this.canvas.clientWidth
      this.canvas.height = this.canvas.clientHeight
      const ctx = this.canvas.getContext('2d')
      //шаблон круга 
      const circleTemplate = (color, raduis, progress = 1) => {
        ctx.beginPath()
        ctx.lineWidth = 7
        ctx.strokeStyle = color
        ctx.arc(this.canvas.width/2, this.canvas.height/2, raduis - ctx.lineWidth, 0, 2 * Math.PI * progress)
        ctx.stroke()
      }
      //
      circleTemplate(this.outerCirle.color, this.outerCirle.radius)
      circleTemplate(this.innerCircle.color, this.innerCircle.radius, completed/total)


      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '25px Verdana';
  
      ctx.beginPath();
      ctx.fillText(`${Math.round((completed/total) * 100)}%`, this.canvas.width/2, this.canvas.height/2);
    }

    render() {
      return (
        <canvas ref={el => this.canvas = el} id="progressCanvas" className="progress"   />
      )
    }
}
