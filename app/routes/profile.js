import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            CurrentPlayer: this.store.find('player', 1)
        }
    }
});
