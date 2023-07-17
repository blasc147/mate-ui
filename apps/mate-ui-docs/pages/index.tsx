import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { BaseLayout } from '../src/layouts/BaseLayout';
import { Button } from '@truenorth/mate-ui';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col">
      <header className="flex w-full">
        <div className="flex flex-col w-full pb-12">
          <h3 className="text-3xl font-semibold text-neutral-900 pb-6">
            Title
          </h3>
          <h5 className="text-xl text-neutral-700">Short description</h5>
        </div>
        <div>
          <Button>Button</Button>
        </div>
      </header>
      <section className="max-w-3xl text-neutral-800">
        <p className="pb-6">
          A Design System is a comprehensive set of guidelines, components, and
          tools that help maintain consistency and coherence across all your web
          applications. It serves as a single source of truth for your design
          and development teams, ensuring that your brand identity and user
          experience remain consistent throughout your digital products.
        </p>
        <p>
          Now, let&apos;s explore the reasons why your firm needs a Design
          System:
        </p>
        <ol className="pb-6">
          <li className="flex">
            <p>1.</p>
            <p className="pl-3">
              Consistent Branding: A Design System provides a unified approach
              to visual and interactive elements, such as colors, typography,
              icons, buttons, and other UI components. By establishing
              consistent branding, your web applications will have a cohesive
              and recognizable look and feel, reinforcing your brand identity
              and enhancing brand recall.
            </p>
          </li>
          <li className="flex">
            <p>2.</p>
            <p className="pl-3">
              Efficiency and Productivity: With a Design System in place, your
              design and development teams can work more efficiently. By having
              pre-defined design patterns, guidelines, and reusable components,
              you save time and effort in recreating the same elements
              repeatedly. This increased productivity allows your teams to focus
              more on solving complex problems and creating unique features.
            </p>
          </li>
          <li className="flex">
            <p>3.</p>
            <p className="pl-3">
              Scalability and Maintenance: As your firm grows and introduces new
              web applications or updates existing ones, a Design System helps
              maintain scalability and consistency. With a shared set of design
              principles and reusable components, it becomes easier to scale
              your applications without sacrificing quality or coherence.
              Additionally, when updates or improvements are required, making
              changes within the Design System ensures that they are propagated
              consistently across all applications.
            </p>
          </li>
          <li className="flex">
            <p>4.</p>
            <p className="pl-3">
              Collaboration and Communication: A Design System fosters better
              collaboration and communication between design and development
              teams. By providing a shared vocabulary and visual language, it
              bridges the gap between designers and developers, facilitating
              smoother handoffs and reducing misunderstandings. This
              collaboration leads to improved teamwork, alignment, and
              ultimately, a better end product.
            </p>
          </li>
          <li className="flex">
            <p>5.</p>
            <p className="pl-3">
              User Experience (UX): A well-designed Design System focuses on
              creating intuitive and user-friendly experiences. By establishing
              consistent interactions, navigation patterns, and user interface
              elements, your web applications become more intuitive for users,
              irrespective of which part of your digital ecosystem they are
              interacting with. This consistency enhances usability, reduces
              cognitive load, and improves overall user satisfaction.
            </p>
          </li>
          <li className="flex">
            <p>6.</p>
            <p className="pl-3">
              Speeding up Development: Design Systems often come with pre-built,
              ready-to-use components and templates that can be easily
              integrated into your web applications. These reusable assets
              significantly speed up the development process, allowing you to
              deliver new features and applications faster. Additionally, with a
              well-documented Design System, onboarding new team members or
              third-party developers becomes more efficient.
            </p>
          </li>
        </ol>
        <p>
          In summary, a Design System plays a pivotal role in ensuring
          consistency, efficiency, scalability, and improved user experiences
          across your firm&apos;s web applications. By investing in a Design
          System, you can streamline your design and development processes,
          strengthen your brand identity, and ultimately deliver high-quality
          digital products that resonate with your users.
        </p>
      </section>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Page;
