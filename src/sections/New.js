import React from "react";
import "./New.css";

export const New = () => {
  return (
    <div>
      <ul
        id="FaqAccordion"
        className="faq-accordion js-is-initialized"
        itemscope=""
        itemtype="http://schema.org/FAQPage"
      >
        <li
          className="accordion-item faq-accordion-item js-is-active"
          data-=""
          itemscope=""
          itemProp="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button
            className="accordion-link faq-accordion-link heading--4 text-left"
            data-event-page="free-trial"
            data-event-category="faq-section"
            data-event-action="click-button-faq"
            data-event-label="expand-faq-1"
            id="AccordionItem1"
            tabindex="0"
            aria-controls="AccordionItem2"
            aria-expanded="true"
          >
            <span itemProp="name">What is Shopify and how does it work?</span>
          </button>
          <div
            className="accordion-content faq-accordion-content"
            itemscope=""
            itemProp="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            id="AccordionItem2"
            role="region"
            aria-labelledby="AccordionItem1"
            aria-hidden="false"
            style="display: block; overflow: hidden; transition: height 400ms ease 0s, padding 400ms ease 0s, margin 400ms ease 0s;"
          >
            <div itemProp="text">
              <p className="faq-accordion-answer"></p>
              <div className="long-form-content ">
                <p>
                  Shopify is a complete commerce platform that lets you start,
                  grow, and manage a business.
                </p>

                <p>With Shopify, you can:</p>

                <ul>
                  <li>Create and customize an online store</li>
                  <li>
                    Sell in multiple places, including web, mobile, social
                    media, online marketplaces, brick-and-mortar locations, and
                    pop-up shops
                  </li>
                  <li>Manage products, inventory, payments, and shipping</li>
                </ul>

                <p>
                  Shopify is completely cloud-based and hosted, which means you
                  don’t have to worry about upgrading or maintaining software or
                  web servers. This gives you the flexibility to access and run
                  your business from almost anywhere, including your mobile
                  device.
                </p>
              </div>
              <p></p>
            </div>
          </div>
        </li>
        <li
          className="accordion-item faq-accordion-item"
          data-=""
          itemscope=""
          itemProp="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button
            className="accordion-link faq-accordion-link heading--4 text-left"
            data-event-page="free-trial"
            data-event-category="faq-section"
            data-event-action="click-button-faq"
            data-event-label="expand-faq-2"
            id="AccordionItem3"
            tabindex="0"
            aria-controls="AccordionItem4"
            aria-expanded="false"
          >
            <span itemProp="name">How much does Shopify cost?</span>
          </button>
          <div
            className="accordion-content faq-accordion-content"
            itemscope=""
            itemProp="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            id="AccordionItem4"
            role="region"
            aria-labelledby="AccordionItem3"
            aria-hidden="true"
          >
            <div itemProp="text">
              <p className="faq-accordion-answer"></p>
              <div className="long-form-content ">
                <p>Try Shopify free for 14 days, no credit card required.</p>

                <p>
                  After your trial expires, choose a pricing plan that suits the
                  size and stage of your business.
                </p>
              </div>
              <p></p>
            </div>
          </div>
        </li>
        <li
          className="accordion-item faq-accordion-item"
          data-=""
          itemscope=""
          itemProp="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button
            className="accordion-link faq-accordion-link heading--4 text-left"
            data-event-page="free-trial"
            data-event-category="faq-section"
            data-event-action="click-button-faq"
            data-event-label="expand-faq-3"
            id="AccordionItem5"
            tabindex="0"
            aria-controls="AccordionItem6"
            aria-expanded="false"
          >
            <span itemProp="name">
              Can I use my own domain name with Shopify?
            </span>
          </button>
          <div
            className="accordion-content faq-accordion-content"
            itemscope=""
            itemProp="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            id="AccordionItem6"
            role="region"
            aria-labelledby="AccordionItem5"
            aria-hidden="true"
          >
            <div itemProp="text">
              <p className="faq-accordion-answer"></p>
              <div className="long-form-content ">
                <p>Yes, you can use your own domain name with Shopify.</p>

                <p>
                  If you have an existing domain name, you can connect it to
                  Shopify from your store’s admin.
                </p>

                <p>
                  If you don’t have a domain name yet, you can either buy one
                  through Shopify or a third-party provider.
                </p>
              </div>
              <p></p>
            </div>
          </div>
        </li>
        <li
          className="accordion-item faq-accordion-item"
          data-=""
          itemscope=""
          itemProp="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button
            className="accordion-link faq-accordion-link heading--4 text-left"
            data-event-page="free-trial"
            data-event-category="faq-section"
            data-event-action="click-button-faq"
            data-event-label="expand-faq-4"
            id="AccordionItem7"
            tabindex="0"
            aria-controls="AccordionItem8"
            aria-expanded="false"
          >
            <span itemProp="name">
              Do I need to be a designer or developer to use Shopify?
            </span>
          </button>
          <div
            className="accordion-content faq-accordion-content"
            itemscope=""
            itemProp="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            id="AccordionItem8"
            role="region"
            aria-labelledby="AccordionItem7"
            aria-hidden="true"
          >
            <div itemProp="text">
              <p className="faq-accordion-answer"></p>
              <div className="long-form-content ">
                <p>
                  No, you don’t need to be a designer or developer to use
                  Shopify.
                </p>

                <p>Signing up for Shopify allows you to:</p>

                <ul>
                  <li>
                    Customize the look and feel of your store with the online
                    store builder and themes.
                  </li>
                  <li>
                    Add features and functionality to your store with apps.
                  </li>
                </ul>

                <p>
                  If you need extra help,{" "}
                  <a
                    href="https://help.shopify.com/en/questions"
                    className="body-link"
                  >
                    you can contact our support team
                  </a>
                  , or visit the{" "}
                  <a href="https://experts.shopify.com/" className="body-link">
                    Shopify Expert Marketplace
                  </a>{" "}
                  to search for and hire a certified Shopify expert.
                </p>
              </div>
              <p></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
