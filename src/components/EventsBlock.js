import React, { Component } from 'react';
import Accordion from '../components/Accordion'

export default class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'events',
    };
  }


  render() {
    const {children} = this.props;

    return (
      <div>

        <ul className="nav nav-tabs mb-2" id="event-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="past-events-tab" data-toggle="tab" href="#past-events" role="tab" aria-controls="past" aria-selected="true">Past Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="upcoming-events-tan" data-toggle="tab" href="#profile-events" role="tab" aria-controls="upcoming" aria-selected="false">Upcoming Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="own-events-tab" data-toggle="tab" href="#own-events" role="tab" aria-controls="own" aria-selected="false">Own Events</a>
          </li>
        </ul>


        <div className="tab-content" id="event-tabs-content">
          <div className="pb-2 tab-pane fade show active" id="past-events" role="tabpanel" aria-labelledby="past-events">

              <Accordion minHeight={100} openItem={undefined}>

                <div className="item">
                  <div className="row">

                    <div className="col-12 col-sm-7 col-lg-4">
                      <div className="media mb-1 mb-md-0">
                        <div className="date-box mr-1">
                          7-8<br/>
                          JAN
                        </div>
                        <div className="media-body align-self-center">
                          <h5 className="my-0">Next-Gen Blockchain Technology Conference</h5>
                          Prague, Czech Republic
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-5 col-lg-8 text-center">
                      <img src="http://windingtree.com/assets/img/where-to-meet/primary-event/bg.png" className="img-fluid" />
                    </div>

                  </div>
                </div>


                <div className="item">
                  <div className="row">

                    <div className="col-12 col-sm-7 col-lg-4">
                      <div className="media mb-1 mb-md-0">
                        <div className="date-box mr-1">
                          15-17<br/>
                          AUG
                        </div>
                        <div className="media-body align-self-center">
                          <h5 className="my-0">Asset Backed Crypto Summit</h5>
                          Lisbon, Portugal
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-5 col-lg-8 text-center">
                      <img src="https://windingtree.com/assets/img/where-to-meet/capalogo.png" width="190" alt="" className="img-fluid"/>
                    </div>

                  </div>
                </div>


                <div className="item">
                  <div className="row">

                    <div className="col-12 col-sm-7 col-lg-4">
                      <div className="media mb-1 mb-md-0">
                        <div className="date-box mr-1">
                          21-23<br/>
                          SEP
                        </div>
                        <div className="media-body align-self-center">
                          <h5 className="my-0">MoneyConf 2019</h5>
                          RDS Arena, Dublin
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-5 col-lg-8 text-center">
                      <img src="https://windingtree.com/assets/img/where-to-meet/hamburg.png" width="190" alt="" className="img-fluid"/>
                    </div>

                  </div>
                </div>

              </Accordion>

          </div>



          <div className="pb-2 tab-pane fade" id="profile-events" role="tabpanel" aria-labelledby="upcoming-events">
            <p>upcoming-events</p>
          </div>
          <div className="pb-2 tab-pane fade" id="own-events" role="tabpanel" aria-labelledby="own-events">
            <p>own-events</p>
          </div>
        </div>


        <footer className="alert alert-accent-light text-center px-1">
          <p className="d-block d-md-inline mr-0 mr-md-2">If you want to invite Winding Tree to you event please send us an email</p>
          <a href="mailto:info@windingtree.com" className="btn btn-primary">Send Email</a>
        </footer>

      </div>
    );
  }
}
