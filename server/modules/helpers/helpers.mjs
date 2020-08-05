import config from '../../config.mjs'

const isPlayerAdmin = player => config.admins.find(admin => player.socialId === admin.socialId) 
  ? true 
  : false

export {
  isPlayerAdmin
}