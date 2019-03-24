'use strict'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFilter:'All',
      filteredProjects:[...this.props.projects]
    }
  }

  selectFilter = (filter) => {
    if(filter === 'All'){ 
      this.setState({
        selectedFilter: filter,
        filteredProjects:[...this.props.projects]
      })
    } else {
      const filteredProjects = this.props.projects.filter(project => project.category === filter )
      this.setState({
        selectedFilter: filter,
        filteredProjects
      })
    }
  }

  render(){
    return(
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.selectFilter} 
        />
        <Portfolio projects={this.state.filteredProjects} />
      </div>
    )
  }
}
