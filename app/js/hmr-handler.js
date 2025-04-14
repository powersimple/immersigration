if (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
      console.log('HMR update received');
      // Perform any necessary updates here
    });
  }
  