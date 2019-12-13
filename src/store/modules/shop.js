const state = {
  funds: 10000,
  businesses: [
    { name: "Clothing Factory", cost: 10000, upgrade: 1, revenue: 100 },
    { name: "Sporting Goods Factory", cost: 10000, upgrade: 1, revenue: 100 },
    { name: "Electronic Goods Factory", cost: 10000, upgrade: 1, revenue: 100 }
  ],
  portfolio: []
};
const mutations = {
  BUY_BUSINESS(state, { businessName, businessCost }) {
    const record = state.businesses.find(
      element => element.name == businessName
    );

    if (state.funds >= businessCost) {
      state.funds -= businessCost;
      state.portfolio.push({
        name: record.name,
        upgrade: record.upgrade,
        revenue: record.revenue
      });
    } else {
      alert("Insuffient Funds!");
    }
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    stockId;
    state.funds += stockPrice * record.quantity;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};
const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  },
  buyBusiness({ commit }, order) {
    commit("BUY_BUSINESS", order);
  }
};
const getters = {
  funds(state) {
    return state.funds;
  },
  businesses(state) {
    return state.businesses.map(business => {
      return {
        name: business.name,
        cost: business.cost,
        upgrade: business.upgrade,
        revenue: business.revenue
      };
    });
  },
  portfolio(state) {
    return state.portfolio.map(business => {
      return {
        name: business.name,
        cost: business.cost,
        upgrade: business.upgrade,
        revenue: business.revenue
      };
    });
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
