import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import WhatsApp from '../components/UI/Icon/whatsapp'
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
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

export default App
