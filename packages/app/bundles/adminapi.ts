import { UsersAPI } from 'protolib/bundles/users/usersAPI'
import { EventsAPI } from 'protolib/bundles/events/eventsAPI'
import { GroupsAPI } from 'protolib/bundles/groups/groupsAPI'
import { ObjectsAPI } from 'protolib/bundles/objects/objectsAPI'
import { PagesAPI } from 'protolib/bundles/pages/pagesAPI'
import { KeysAPI } from 'protolib/bundles/keys/keysAPI'
import { APIsAPI } from 'protolib/bundles/apis/api'
import { DevicesAPI } from 'protolib/bundles/devices/devices/devicesAPI'
import { DeviceSdksAPI } from 'protolib/bundles/devices/deviceSdks/deviceSdksAPI'
import { DeviceCoresAPI } from 'protolib/bundles/devices/devicecores/devicecoresAPI'
import { DeviceBoardsAPI } from 'protolib/bundles/devices/deviceBoards/deviceBoardsAPI'
import { DeviceDefinitionsAPI } from 'protolib/bundles/devices/deviceDefinitions/deviceDefinitionsAPI'
import { DeviceMessageRouter } from 'protolib/bundles/devices/router/api'
import { DatabasesAPI } from 'protolib/bundles/databases/databasesAPI'
import { WorkspacesAPI } from 'protolib/bundles/workspaces/workspacesAPI'
import { ResourcesAPI } from 'protolib/bundles/resources/resourcesAPI'
import { AiAssistantsAPI } from 'protolib/bundles/aiAssistants/aiAssistantsAPI';
import { MasksAPI } from 'protolib/bundles/visualui/masksAPI';
import { SignalingAPI } from 'protolib/bundles/signalings/signalingsAPI';

export default (app, context) => {
  UsersAPI(app, context)
  GroupsAPI(app, context)
  EventsAPI(app, context)
  ObjectsAPI(app, context)
  KeysAPI(app, context)
  PagesAPI(app, context)
  APIsAPI(app, context)
  DevicesAPI(app, context)
  DeviceSdksAPI(app, context)
  DeviceCoresAPI(app, context)
  DeviceBoardsAPI(app, context)
  DeviceDefinitionsAPI(app, context)
  DeviceMessageRouter(app, context)
  DatabasesAPI(app, context)
  WorkspacesAPI(app, context)
  ResourcesAPI(app, context)
  AiAssistantsAPI(app, context)
  MasksAPI(app, context)
  SignalingAPI(app, context)
}