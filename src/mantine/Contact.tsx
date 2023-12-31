import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem
} from "@mantine/core"
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react"
import { ContactIconsList } from "./icons/ContactIcons"
import { useForm } from "@mantine/form"

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",

    padding: `calc(${theme.spacing.xl} * 2.5)`,
    borderRadius: theme.radius.md,
    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(500),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%"
    }
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1]
    }
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5]
    }
  },

  inputLabel: {
    color: theme.black
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6]
  }
}))

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram]
type ContactData = {
  to: string
  name: string
  message: string
}
export function ContactMantine() {
  const { classes } = useStyles()
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant='transparent'>
      <Icon size='1.4rem' stroke={1.5} />
    </ActionIcon>
  ))
  const form = useForm({
    initialValues: {
      to: "",
      name: "",
      message: ""
    },

    validate: {
      to: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email")
    }
  })

  const handleSendEmail = async (data: ContactData) => {
    console.log(data)

    const response = await fetch("/api/send", {
      method: "POST", // Specify the HTTP method used by your API route
      body: JSON.stringify({ data })
    })
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  return (
    <div className={`${classes.wrapper} mx-12 my-6 bg-gradient-to-r from-orange-400 to-orange-500`} id='contact'>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <div>
          <Title className={`${classes.title} text-3xl`}>Let Us Know How We Can Help Your Business Succeed</Title>
          <Text className={`${classes.description} text-lg`} mt='lg' mb={30}>
            For any inquiries or to place an order, contact our friendly customer support team today. We look forward to
            serving you.
          </Text>
          <ContactIconsList variant='white' />
          <Group mt='xl'>{icons}</Group>
        </div>
        <div className={classes.form}>
          <form onSubmit={form.onSubmit((values) => handleSendEmail(values))}>
            <TextInput
              label='Email'
              placeholder='your@email.com'
              required
              {...form.getInputProps("to")}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label='Name'
              placeholder='John Doe'
              mt='md'
              {...form.getInputProps("name")}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label='Your message'
              placeholder='I want to order your goods'
              minRows={4}
              mt='md'
              {...form.getInputProps("message")}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Group position='right' mt='md'>
              <Button type='submit' className={classes.control} variant='light' color='orange'>
                Send message
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  )
}
