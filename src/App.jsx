import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import WhatsApp from './components/UI/Icon/whatsapp'

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <WhatsApp />
        <Header data={this.state.landingPageData.Header} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />        
        <About data={this.state.landingPageData.About} />
        <Team data={this.state.landingPageData.Team} />      
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
