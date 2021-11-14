import { API, graphqlOperation } from '@aws-amplify/api';

/**
 * Every plugin must export an install method that is invoked 
 * when the plugin is attached to the vuejs object 
 */
export default {
  install: (Vue) => {
    // Expose the method $grapqhl for the plugin
    Vue.prototype.$graphql = async function (graphql, variables) {
      console.log("calling ", graphql)
      return (await API.graphql(graphqlOperation(graphql, variables)));
    }
  }
};
