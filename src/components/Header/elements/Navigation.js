import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Anchor from "../../anchor";

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Anchor path="/">
            Home
          </Anchor>
        </li>
        <li>
          <Anchor
            path="/shop/fullwidth-left-sidebar">
            Shop
          </Anchor>
        </li>
        <li>
          <Anchor path="/">
            Elements
          </Anchor>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group One
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/product-categories">
                    Product Categories
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-sliders">
                    Product Sliders
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-tabs">
                    Product Tabs
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-widgets">
                    Product Widget
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/recent-products">
                    Recent Products
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group Two
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/sale-products">
                    Sale Products
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/featured-products">
                    Featured products
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/top-rated-products">
                    Top Rated products
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/best-selling-products">
                    Best Selling
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-attributes">
                    Product Attributes
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group Three
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/blog-posts">
                    Blog Posts
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/mailchimp-forms">
                    Mailchimp Form
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/icon-boxes">
                    Icon Box
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/team-members">
                    Team Member
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/faqs">
                    FAQs / Toggles
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group Four
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/countdown-timers">
                    Countdown Timer
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/buttons">
                    Buttons
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/testimonials">
                    Testimonials
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/google-maps">
                    Google Maps
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/menu-element.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <Anchor path="/">
            Pages
          </Anchor>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Anchor path="/other/about">
                About Us
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/about-two">
                About Us Two
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/contact">
                Contact Us
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/faq">
                F.A.Q
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/coming-soon">
                Coming Soon
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/not-found">
                Not Found
              </Anchor>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <Anchor path="/blog/standard-left-sidebar">
            Blog
          </Anchor>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Anchor path="/blog/standard-left-sidebar">
                Standard Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/standard-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/standard-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/standard-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/grid-left-sidebar">
                Grid Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/grid-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/grid-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/grid-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/list-left-sidebar">
                List Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/list-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/list-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/list-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/post-left-sidebar">
                Single Post Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/post-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/post-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/post-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
