import type { SimpleModel } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    title: "",
    saveSession: true,
    // 0-2
    APITemperature: 0.6,
    continuousDialogue: true,
    model: "gpt-3.5" as SimpleModel
  },
  CLIENT_DEFAULT_MESSAGE: `Powered by OpenAI
- 在您开始使用ChatGPT镜像站之前，我们需要你提供一个API Key，API Key来自OpenAI。

- 你可以使用OpenAI账号获取API Key，[查询API Key链接](https://platform.openai.com/account/api-keys) ，点右下角⚙输入你的API key。 

- 如需**专属镜像站和机器人**请联系我们: [微信](https://cdn.staticaly.com/gh/xiaowansm5/img@master/blog/WechatIMG269.36bf1vq4dhk0.webp) | [邮箱](mailto:wwang.pw@gmail.com) | [商店](https://enna.eu.org) 

- 点击每条消息前的头像，可以锁定对话，作为角色设定。

- 现在支持多个对话，打开对话设置，点击新建对话。在输入框里输入 [[/]][[/]] 或者 [[空格]][[空格]] 可以切换对话，搜索历史消息。

- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5": 16 * 1000,
    "gpt-4": 32 * 1000
  } as Record<SimpleModel, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
