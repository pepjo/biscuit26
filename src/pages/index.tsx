import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";
import booking from "../static/undraw_Birthday_cake_2wxy.svg"
import logo from "../static/biscuit26.png"

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">
          <img className="main_logo" src={logo} />
        </Header>
        <Header inverted as="h2">Pastisseria - Gelateria - Cafeteria</Header>
        <Button primary size="huge"><a href="https://goo.gl/maps/uqUai2TBo6ZdjFmg8">Vine!</a></Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Gelats</Header>
            <p>
              Els millors gelats artesans.
            </p>
            <Header>Pastissos</Header>
            <p>
              Fem pastissos personalitzats.
            </p>
            <Header>Cafès</Header>
            <p>
              Vine a esmorzar amb el millor cafè.
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>On som?</Header>
            <iframe
              height="450"
              frameBorder="0"
              style={{ width: '100%', border:0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8fV0KhCYpBIR5VHKNrXPNPg&key=AIzaSyBuU1zE0Dj07xzm6RCxPOJ7QK-ppt7bDFs"
              allowFullScreen
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="6" floated="right">
            <img src={booking} />
          </Grid.Column>
          <Grid.Column width="8">
            <Header>Reserva l'espai</Header>
            <p>
              El nostre espai es ideal per tot tipus d'esdeveniments.
            </p>
            <p>
              Contacte'ns a <a href="mailto:info@biscuit26.com">info@biscuit26.com</a>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
