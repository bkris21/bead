import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            matches: this.store.findAll('match'),
            CurrentPlayer: this.store.find('player', 1)
        };
    }
});
