import React from 'react';
import { Route, Link } from 'react-router-dom';
import PageTemplate from "./PageTemplate";
import {AboutMenu} from "./AboutMenu";
import {Company, History, Location, Services} from "./AboutPages";

export const Home = () =>
    <div className="home">
        <h1>[Home Page]</h1>
        <nav>
            <Link to="about">[About]</Link>
            <Link to="events">[Events]</Link>
            <Link to="products">[Products]</Link>
            <Link to="contact">[Contact]</Link>
        </nav>
    </div>;

export const About = () =>
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Company} />
            <Route path="/about/history" component={History} />
            <Route path="/about/services" component={Services} />
            <Route path="/about/location" component={Location} />
        </section>
    </PageTemplate>;

export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>[Events Calendar]</h1>
        </section>
    </PageTemplate>;


export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Products Catalog]</h1>
        </section>
    </PageTemplate>;

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>;

export const Whoops404 = ({ location }) =>
    <PageTemplate>
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1>
        </div>
    </PageTemplate>;
