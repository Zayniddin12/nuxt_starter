export interface TagType {
  href?: string
  left: string
  top: string
  label: string
}

export const useTagList = () => {
  const { t } = useI18n()

  const data: TagType[] = [
    {
      href: '/events',
      left: '20%',
      top: '34%',
      label: t('Header.activities') as string,
    },
    {
      href: '/startups',
      left: '66%',
      top: '20%',
      label: t('Header.startups') as string,
    },
    {
      href: '/investors',
      left: '15%',
      top: '49%',
      label: t('Header.investors') as string,
    },
    {
      href: '/resources',
      left: '42%',
      top: '28%',
      label: t('Header.resources') as string,
    },
    {
      href: '/programs',
      left: '53%',
      top: '67%',
      label: t('Header.programs') as string,
    },
    {
      href: '/news',
      left: '36%',
      top: '72%',
      label: t('Header.news') as string,
    },
  ]

  const resources: TagType[] = [
    {
      href: '/resources?offset=0&tab=partner',
      left: '28%',
      top: '18%',
      label: t('Header.partner') as string,
    },
    {
      href: '/resources?offset=0&tab=mentor',
      left: '17%',
      top: '22%',
      label: t('Header.mentor') as string,
    },
    {
      href: '/resources?offset=0&tab=accelerator',
      left: '61%',
      top: '32%',
      label: t('Header.accelerator') as string,
    },
  ]

  const programs: TagType[] = [
    {
      href: '/programs?tab=support-programs',
      left: '60%',
      top: '75%',
      label: t('Header.support-programs') as string,
    },
    {
      href: '/programs?tab=local',
      left: '72%',
      top: '40%',
      label: t('Header.local') as string,
    },
    {
      href: '/programs?tab=international',
      left: '33%',
      top: '64%',
      label: t('Header.international') as string,
    },
  ]

  const stages: TagType[] = [
    {
      href: '/startups?stage=pre_seed',
      left: '68%',
      top: '60%',
      label: t('Form.stage.pre_seed') as string,
    },
    {
      href: '/startups?stage=seed_',
      left: '72%',
      top: '50%',
      label: t('Form.stage.seed_') as string,
    },
    {
      href: '/startups?stage=early_a',
      left: '13%',
      top: '60%',
      label: t('Form.stage.early_a') as string,
    },
    {
      href: '/startups?stage=early_b',
      left: '15%',
      top: '75%',
      label: t('Form.stage.early_b') as string,
    },
    {
      href: '/startups?stage=idea',
      left: '43%',
      top: '18%',
      label: t('Form.stage.expansion') as string,
    },
  ]

  return { data, resources, programs, stages }
}
