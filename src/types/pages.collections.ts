import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean(),
};


export const authors = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/authors",
  }),
  schema: z.object({
    ...commonFields,
    email: z.email().optional(),
  }),
});



export const changelog = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/changelog",
  }),
  schema: z.object({
    ...commonFields,
  }),
});


export const features = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/features",
  }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      subtitle: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const integration = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/integration",
  }),
  schema: z.object({
    ...commonFields,
  }),
});

export const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    ...commonFields,
  }),
});


export const review = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/review",
  }),
  schema: z.object({
    ...commonFields,
    testimonial: z.object({
      subtitle: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  }),
});

const bannerSchema = z.object({
  type: z.literal("banner"),
  enable: z.boolean().optional(),
  title: z.string(),
  content: z.string(),
  button_primary: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }),
  button_secondary: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }).optional(),
  show_video: z.boolean().optional(),
});

const clientsSchema = z.object({
  type: z.literal("clients"),
  enable: z.boolean(),
  title: z.string(),
  list: z.array(z.string()),
});

const howItWorksSchema = z.object({
  type: z.literal("how_it_works"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  list: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
});

const featuresGridSchema = z.object({
  type: z.literal("features_grid"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  list: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }).optional(),
    })
  ),
});

const featuresSectionSchema = z.object({
  type: z.literal("features_section"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  list: z.array(
    z.object({
      title: z.string(),
      image: z.string(),
      description: z.string().optional(),
      bulletpoints_y: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ).optional(),
      bulletpoints_x: z.array(
        z.object({
          icon: z.string(),
          title: z.string().optional(),
          description: z.string(),
        })
      ).optional(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }).optional(),
    })
  ),
});

const featuresExplanationSchema = z.object({
  type: z.literal("features_explanation"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  list: z.array(
    z.object({
      row: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    })
  ),
});

const pricingSchema = z.object({
  type: z.literal("pricing"),
  enable: z.boolean(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
});

const testimonialSchema = z.object({
  type: z.literal("testimonial"),
  enable: z.boolean(),
});

const faqSchema = z.object({
  type: z.literal("faq"),
  enable: z.boolean(),
});

const pageCtaSchema = z.object({
  type: z.literal("page_cta"),
  enable: z.boolean(),
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  button: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }),
});

const aboutBannerSchema = z.object({
  type: z.literal("about_banner"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  left_image: z.string().optional(),
  right_image: z.string().optional(),
  quote: z.object({
    avatar: z.string(),
    name: z.string(),
    designation: z.string(),
    content: z.string(),
  }).optional(),
});

const ourValuesSchema = z.object({
  type: z.literal("our_values"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  list: z.array(
    z.object({
      icon: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
  ).optional(),
  stats: z.array(
    z.object({
      label: z.string().optional(),
      value: z.string().optional(),
    })
  ).optional(),
});

const ourTeamSchema = z.object({
  type: z.literal("our_team"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  list: z.array(
    z.object({
      name: z.string().optional(),
      image: z.string().optional(),
      company: z.string().optional(),
    })
  ).optional(),
});

const contactHeroSchema = z.object({
  type: z.literal("contact_hero"),
  enable: z.boolean().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  list: z.array(
    z.object({
      icon: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
  ).optional(),
});

const blogSectionSchema = z.object({
  type: z.literal("blog_section"),
  enable: z.boolean().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  visible_posts: z.number().optional(),
  card_layout: z.string().optional(),
  large_heading: z.boolean().optional(),
});

const paginationSchema = z.object({
  type: z.literal("pagination"),
  enable: z.boolean().optional(),
});

const blogSingleContentSchema = z.object({
  type: z.literal("blog_single_content"),
  enable: z.boolean().optional(),
});

const sectionSchema = z.discriminatedUnion("type", [
  bannerSchema,
  clientsSchema,
  howItWorksSchema,
  featuresGridSchema,
  featuresSectionSchema,
  featuresExplanationSchema,
  pricingSchema,
  testimonialSchema,
  faqSchema,
  pageCtaSchema,
  aboutBannerSchema,
  ourValuesSchema,
  ourTeamSchema,
  contactHeroSchema,
  blogSectionSchema,
  paginationSchema,
  blogSingleContentSchema,
]);

export const about = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/about",
  }),
  schema: z.object({
    ...commonFields,
    sections: z.array(sectionSchema),
  }),
});

export const contact = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/contact",
  }),
  schema: z.object({
    ...commonFields,
    sections: z.array(sectionSchema),
  }),
});

export const pricing = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/pricing",
  }),
  schema: z.object({
    ...commonFields,
    sections: z.array(sectionSchema),
  }),
});

export const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    ...commonFields,
    hero: z
      .object({
        subtitle: z.string(),
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    categories: z.array(z.string()).optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sections: z.array(sectionSchema).optional(),
  }),
});

export const homepage = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/homepage",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    keywords: z.string().optional(),
    draft: z.boolean(),
    sections: z.array(sectionSchema),
  }),
});
