import React , {useContext, useEffect, useState} from 'react';
import bgVideo from "assets/videos/video_playback_sample.mp4";
import { Form, Input, DatePicker, Button, Row, Col } from 'antd';
import { AppContext } from "app/context";
import { ListingService } from 'app/services/ListingService';
const MainSection = (): React.ReactElement <any> => {
    //const videoId = 'H1CIBqDeWQ0';
    const {OFFICIAL_VV_LOGO} = useContext(AppContext)
    const ls = new ListingService;
    //const OFFICIAL_VV_LOGO = process.env.REACT_APP_OFFICIAL_VV_LOGO;
    const [listings, setListings] = useState<any>({});

    const submitSearchListingForm = async () => {
      try {
        let listings = await ls.get({});
        setListings(listings)
      } catch(e) {
        //
      }
    }

    /**
     * 
     * sample implementation
     * of api services
     * connection to backend
     * get listing data from backend
     * 
     */
    useEffect ( () => {
      const getListings = async () => {
        try {
          let listing = await ls.get<any>();
          return listing.data;
        } catch (e) {
          // throw 
        }
      }
      //setListings(getListings());
    }, [])

    useEffect (() => {
      // console.log(listings)
    }, [listings]);

    return (
      <div className="vv-video-container">
        <video autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="vv-video-content">
          <img src={OFFICIAL_VV_LOGO} />
          <div className="vv-search-available-listing-form">
            <Form
              name="vv_search_available_listing_form"
              onFinish={()=>{}}
              layout="vertical"
              style={{ maxWidth: 800, margin: '0rem auto' }}
            >
              <Row gutter={16}>
                <Col span={5}>
                  <Form.Item
                    label="Check-In Date"
                    name="vv_checkin_date"
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Check-Out Date"
                    name="vv_checkout_date"
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Adults"
                    name="vv_number_of_adults"
                  >
                    <Input style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Children"
                    name="vv_number_of_children"
                  >
                    <Input style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item  label=" ">
                    <Button>BOOK NOW</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    )
}

export default MainSection;