import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            githubUrl
            twitterUrl
            codepenUrl
            linkedinUrl
            emailAddress
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
