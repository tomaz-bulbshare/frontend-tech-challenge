type Brand = {
  readonly name: string;
  readonly logo: string;
};

export type Brief = {
  readonly briefref: string;
  readonly brand: Brand;
  readonly name: string;
  readonly description: string;
  readonly feed_title: string;
  readonly banner_text: string;
  readonly banner_image: string;
  readonly ad_1_image: string;
  readonly ad_2_image: string;
  readonly starts_on: string;
};
